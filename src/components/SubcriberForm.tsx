import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from './SubcriberForm.module.css'

const schema = yup
  .object({
    Name: yup.string().min(2, "Tên tối thiểu là 2 kí tự").required("Vui lòng điền tên").trim(),
    Email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Vui lòng điền email"),    
    Mobile: yup.number().positive().integer().min(10).required("Vui lòng điền số điện thoại"),
    Sub: yup.boolean().oneOf([true, false]).required("Vui lòng đồng ý với điều khoản"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

function SubcriberForm() {
     
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: yupResolver(schema),
      });
      const onSubmit = (data: FormData) => console.log(data);
    
      return (
      <>
        <h1 className={styles.header}>Subcribe to Our Newsletter</h1>
        <p className={styles.text}>Do not want to miss news, updates, note and any offer on our products, then please subscribe to our mailling list.</p>
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
                <input placeholder="email" {...register("Email", { required: true })} />
                {errors.Email && <span>{errors.Email.message}</span>}
            </div>
            <div>
                <input placeholder="name" {...register("Name", { required: true })} />
                {errors.Name && <span>{errors.Name.message}</span>}
            </div>
            <div>
                <input  
                type="number"
                placeholder="Mobile"
                {...register("Mobile", { required: true })}
                />
                {errors.Mobile && <span>{errors.Mobile.message}</span>}
            </div>
            <div>
                {errors.Sub && <span>{errors.Sub.message}</span>}
            </div>
            <input type="submit" />
            </form>
        </div>
      </>
      );
}

export default SubcriberForm;