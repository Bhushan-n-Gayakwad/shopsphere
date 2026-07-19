import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input/Input";

const HeroSection = () => {
  return (
    <section>
        <div>
            <span>NEW COLLECTION</span>
            <h1>Discover Your Perfect Style</h1>
            <p>Explore thousands of premium products at the best prices.</p>

            <Button text="Shop Now" />
            <Button text="Explore Products" />
        </div>
        <div>
            Hero Image
        </div>
    </section>
  )
};

export default HeroSection;