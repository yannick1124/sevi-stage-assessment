type Props = {}

const Datepicker = (props: Props) => {
  return (
    <form>
      <input type="date" id="start" />
      <input type="date" id="end" />
      <input type="submit" />
    </form> 
  );
};

export default Datepicker;