import {defineStore} from 'pinia'
import { reactive, ref } from "vue";
export const useFormStore = defineStore('useFormStore',()=>{
  const Eldialog = ref(false);
  const type = ref();
  const storeform = ref();
  const rules = reactive({
    name: [{ required: true, trigger:'blur' }],
    age: [{ required: true, trigger:'blur' }],
    address: [{ required: true, trigger:'blur' }],
    sex: [{ required: true, trigger:'blur' }],
    birthday: [{ required: true, trigger:'blur' }],
  });
  return{storeform,rules,Eldialog,type}
})