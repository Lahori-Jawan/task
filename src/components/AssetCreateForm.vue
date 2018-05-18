<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <div class="field is-horizontal">
                    <div class="field-label">
                        <label class="label">Name</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                          <div class="control">
                              <input class="input" type="text" v-model="mutatationObject.name" placeholder="Enter Name" required>
                          </div>
                          <p class="help is-danger" v-if="submit && !mutatationObject.name.length">
                              This field is required
                          </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label">
                        <label class="label">Alert</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                          <div class="control">
                              <input class="input" type="text" v-model="mutatationObject.alert" placeholder="Alert" required>
                          </div>
                          <p class="help is-danger" v-if="submit && !mutatationObject.alert.length">
                              This field is required
                          </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label">
                        <label class="label">Operator</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                          <div class="control">
                              <input class="input" type="text" v-model="mutatationObject.operator" placeholder="operator" required>
                          </div>
                          <p class="help is-danger" v-if="submit && !mutatationObject.operator.length">
                              This field is required
                          </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label">
                        <label class="label">Service</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                          <div class="control">
                              <input class="input" type="text" v-model="mutatationObject.service" placeholder="Service" required>
                          </div>
                          <p class="help is-danger" v-if="submit && !mutatationObject.service.length">
                              This field is required
                          </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label">
                        <label class="label">CDS</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                          <div class="control">
                              <input class="input" type="text" v-model="mutatationObject.cds" placeholder="cds" required>
                          </div>
                          <p class="help is-danger" v-if="submit && !mutatationObject.cds.length">
                              This field is required
                          </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label">
                        <label class="label">Distance</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                          <div class="control">
                              <input class="input" type="text" v-model="mutatationObject.distance" placeholder="distance" required>
                          </div>
                          <p class="help is-danger" v-if="submit && !mutatationObject.distance.length">
                              This field is required
                          </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label">
                        <label class="label">Performance</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                          <div class="control">
                              <input class="input" type="text" v-model="mutatationObject.performance" placeholder="performance" required>
                          </div>
                          <p class="help is-danger" v-if="submit && !mutatationObject.performance.length">
                              This field is required
                          </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label">
                        <label class="label">Level</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                          <div class="control">
                              <input class="input" type="text" v-model="mutatationObject.level" placeholder="Level" required>
                          </div>
                          <p class="help is-danger" v-if="submit && !mutatationObject.level.length">
                              This field is required
                          </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label">
                        <label class="label">Dosing</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                          <div class="control">
                              <input class="input" type="text" v-model="mutatationObject.dosing" placeholder="Dosing" required>
                          </div>
                          <p class="help is-danger" v-if="submit && !mutatationObject.dosing.length">
                              This field is required
                          </p>
                        </div>
                    </div>
                </div>
                  <p class="control">
                      <a class="button is-rounded is-link" @click="createAsset">
                      New Asset
                    </a>
                </p>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>

<script>
import Assets from '@/graphql/Assets.gql'
import newAsset from '@/graphql/createAsset.gql' ;
export default {
  data () {
    return {
      submit: false,
      mutatationObject: {
        name: '',
        alert: '',
        operator: '',
        service: '',
        cds: '',
        distance: '',
        performance: '',
        level: '',
        dosing: ''
      }
    }
  },
  methods: {
    createAsset () {
      let asset = {};
      this.submit = true
      let variables = this.mutatationObject
      for(const key in variables) {
        if(!variables[key].length) {
          return
        }
      }
      this.$apollo.mutate({
        mutation: newAsset,
        variables: {
          data: { ...this.mutatationObject }
        },
        update: (store, {data: {createAsset}}) => {
          asset = {...createAsset}
          const cache = store.readQuery({ query: Assets })
          cache.assets.push(createAsset)
          store.writeQuery({ query: Assets, data: cache })
          this.$emit('finish')
          this.submit = false   // re-new form submission
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createAsset: {
            __typename: 'Asset',
            id: asset.id,
            name: asset.name,
            alert: asset.alert,
            operator: asset.operator,
            service: asset.service,
            cds: asset.cds,
            distance: asset.distance,
            performance: asset.performance,
            level: asset.level,
            dosing: asset.dosing
          },
        }
      })
    }
  }
}
</script>


<style>
.box {
    overflow-y: scroll;
    max-height: 35rem;
}

@media screen and (max-width: 769px) {
  .modal-content {
    max-height: calc(100vh - 90px);
  }
}

</style>
