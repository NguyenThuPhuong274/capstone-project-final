
const AppTextArea = ({ placeholder, value, handleChangeValue, title, height }) => {
  return <>

    <div class="w-full">
      <div class="relative w-full">
        <textarea
          value={value}
          class={`peer ${height}  w-full resize-none rounded-[7px] border `}
          placeholder={placeholder}
          onChange={(e) => handleChangeValue(title, e.target.value)}

        ></textarea>

      </div>
    </div>

  </>
}

export default AppTextArea;