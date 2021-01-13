<template>
  <v-form>
    <div class="d-flex justify-center">
      <div v-if="mode === 'submit'" class="d-flex">
        <v-icon class="mr-2"> mdi-plus </v-icon>
        <h2>Adicionar Produto</h2>
      </div>
      <div v-if="mode === 'update'" class="d-flex">
        <v-icon class="mr-2"> mdi-pencil </v-icon>
        <h2>Editar Produto</h2>
      </div>
    </div>
    <v-row>
      <v-col cols="12">
        <v-checkbox color="success" v-model="data.isDestacado" label="Destacar Produto?"/> 
      </v-col>
      <v-col cols="12">
        <div>
          <v-text-field
            validate-on-blur
            v-model="data.nome"
            label="Nome"
          />
          <v-text-field
            validate-on-blur
            v-model="data.instagramUrl"
            label="Produto no instagram (URL)"
          />
        </div>
      </v-col>
      <v-col cols="12" md="8">
        <Quill :item="data" />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          ref="input"
          v-currency
          validate-on-blur
          v-model.number="data.preco"
          label="Preço"
        />
        <v-text-field
          v-mask="'##'"
          append-icon="mdi-percent"
          validate-on-blur
          v-model.number="data.desconto"
          label="Desconto"
        />
        <v-text-field
          v-mask="'#####'"
          validate-on-blur
          v-model.number="data.quantidade"
          label="Quantidade"
        />
        <v-text-field
          v-mask="'##'"
          validate-on-blur
          v-model="data.parcelas"
          label="Parcelas"
        />
        <div>
          <div class="d-flex align-center">
            <v-text-field
              validate-on-blur
              @keydown.enter.prevent="addChip('tamanhos')"
              v-model="tamanhos"
              label="Tamanhos"
            />
            <v-btn
              class="ml-4"
              @click="addChip('tamanhos')"
              depressed
              fab
              small
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
          <v-chip
            close
            @click:close="delChip('tamanhos', i)"
            small
            v-for="(tamanho, i) in data.tamanhos"
            :key="tamanho.id"
          >
            {{ tamanho.name }}
          </v-chip>
        </div>
        <div>
          <div class="d-flex align-center">
            <v-text-field
              validate-on-blur
              @keydown.enter.prevent="addChip('cores')"
              v-model="cores"
              label="Cores"
            />
            <v-btn class="ml-4" @click="addChip('cores')" depressed fab small>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
          <v-chip
            close
            @click:close="delChip('cores', i)"
            small
            v-for="(cor, i) in data.cores"
            :key="cor.id"
          >
            {{ cor.name }}
          </v-chip>
        </div>

        <v-file-input
          accept="image/png, image/jpeg"
          :loading="storageIsLoading"
          @change="handleUpload"
          v-model="file"
          label="Adicionar Foto"
        />
        <div class="d-flex">
          <v-row>
            <v-col cols="4" v-for="(imagem, i) in data.imagens" :key="i">
              <v-dialog>
                <template v-slot:activator="{ on }">
                  <v-card v-on="on" class="ma-1" width="84">
                    <v-icon @click.stop="handleDelFile(imagem, i)">
                      mdi-close
                    </v-icon>
                    <v-img contain :src="imagem" />
                  </v-card>
                </template>
                <v-sheet>
                  <v-img contain aspect-ratio="1.777" :src="imagem" />
                </v-sheet>
              </v-dialog>
            </v-col>
          </v-row>
        </div>
        <div class="d-flex justify-end mt-2">
          <v-btn v-if="mode === 'submit'" @click="handleSubmit" color="info">
            Adicionar
          </v-btn>
          <v-btn v-if="mode === 'update'" @click="handleUpdate" color="warning">
            Editar
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>

import { mapGetters } from "vuex";
import { v4 } from "uuid";

const collection = "produtos";

export default {
  props: {
    data: Object,
    mode: String,
  },
 
  data: () => ({
    file: null,
    tamanhos: null,
    cores: null,
    precoValue: null,
  }),
  computed: {
    ...mapGetters({
      storageError: "getStorageError",
      storageIsLoading: "getStorageIsLoading",
      url: "getUrl",
    }),
    docError() {
      return this.$store.getters.getDocError;
    },
  },
  methods: {
    async handleUpload() {
      if(this.file) {
        await this.$store.dispatch('produtos/handleUpload', { file: this.file })
        this.file = null
      }
    },
    async handleDelFile(imagem, i) {
      console.log(imagem)
      await this.$store.dispatch('produtos/handleDelFile', { imagem, i })
    },
    handleSubmit() {
      this.$store.dispatch('produtos/handleSubmit', { precoValue: this.precoValue })
    },
    handleUpdate() {
      this.$store.dispatch('produtos/handleUpdate', { precoValue: this.precoValue })
    },
    addChip(name, i) {
      if (this[name] && this[name].trim()) {
        if (!this.data[name].some((item) => item.name === this[name])) {
          this.data[name].push({
            id: v4(),
            name: this[name].toLowerCase().trim(),
          });
        }
      }

      this[name] = null;
    },
    delChip(name, i) {
      this.data[name].splice(i, 1);
    },
    closeDialog() {
      this.$emit("closeDialog");
    },
    
  },
  watch: {
    'data.preco'() {
      this.precoValue = this.$ci.getValue(this.$refs.input);
    },
  },
};
</script>

<style scoped>
.quill-editor {
  height: 25%;
}
</style>