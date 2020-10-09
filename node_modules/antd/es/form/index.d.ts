import { Rule, RuleObject, RuleRender } from 'rc-field-form/lib/interface';
import InternalForm, { useForm, FormInstance, FormProps } from './Form';
import Item, { FormItemProps } from './FormItem';
import List, { FormListProps } from './FormList';
import { FormProvider } from './context';
declare type InternalFormType = typeof InternalForm;
interface FormInterface extends InternalFormType {
    useForm: typeof useForm;
    Item: typeof Item;
    List: typeof List;
    Provider: typeof FormProvider;
    /** @deprecated Only for warning usage. Do not use. */
    create: () => void;
}
declare const Form: FormInterface;
export { FormInstance, FormProps, FormItemProps, FormListProps, Rule, RuleObject, RuleRender };
export default Form;
