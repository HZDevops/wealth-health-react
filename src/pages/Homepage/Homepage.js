import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Banner from "../../components/Banner/Banner";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";

function HomePage() {
  return (
    <>
      <NavigationBar page="homepage" />
      <Banner />
      <EmployeeForm />
    </>
  );
}

export default HomePage;
