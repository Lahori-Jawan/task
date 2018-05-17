<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <div class="field is-horizontal">
                    <div class="field-label is-small">
                        <label class="label">Name</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control">
                            <input class="input is-small" type="text" v-model="mutatationObject.name" placeholder="Enter Name">
                        </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-small">
                        <label class="label">Alert</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control">
                            <input class="input is-small" type="text" v-model="mutatationObject.alert" placeholder="Alert">
                        </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-small">
                        <label class="label">Operator</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control">
                            <input class="input is-small" type="text" v-model="mutatationObject.operator" placeholder="operator">
                        </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-small">
                        <label class="label">Service</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control">
                            <input class="input is-small" type="text" v-model="mutatationObject.service" placeholder="Service">
                        </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-small">
                        <label class="label">CDS</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control">
                            <input class="input is-small" type="text" v-model="mutatationObject.cds" placeholder="cds">
                        </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-small">
                        <label class="label">Distance</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control">
                            <input class="input is-small" type="text" v-model="mutatationObject.distance" placeholder="distance">
                        </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-small">
                        <label class="label">Performance</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control">
                            <input class="input is-small" type="text" v-model="mutatationObject.performace" placeholder="performace">
                        </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-small">
                        <label class="label">Level</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control">
                            <input class="input is-small" type="text" v-model="mutatationObject.level" placeholder="Level">
                        </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-small">
                        <label class="label">Dosing</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control">
                            <input class="input is-small" type="text" v-model="mutatationObject.dosing" placeholder="Dosing">
                        </div>
                        </div>
                    </div>
                </div>
                <p class="control">
                    <a class="button is-primary" @click="createAsset">
                    Create Asset
                    </a>
                </p>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>

<script>
import newAsset from '@/graphql/createAsset.gql' ;
export default {
  data () {
    return {
      mutatationObject: {
        name: '',
        alert: '',
        operator: '',
        service: '',
        cds: '',
        distance: '',
        performace: '',
        level: '',
        dosing: ''
      }
    }
  },
  methods: {
    createAsset () {
      this.$apollo.mutate({
        mutatation: newAsset,
        variables: {
          data: { ...this.mutatationObject }
        },
        update: (store, data) => {
          console.log('data', data)
        }
      })
    }
  }
}
</script>


<style>
.box {
    overflow-y: scroll;
    max-height: 30rem;
}
</style>
