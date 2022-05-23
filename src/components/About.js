
import brainp from "./images/brainp.png";
import Natur from "./images/autumn.png";



const About = () => {
  return (
    <div>
      
      <h2>This is the About page</h2>
      <div style={{marginTop: "10px"}} className="link_list">
      </div>
      <section>
              <p className="p-about1">As a person, I am well organised and solution-focused. Wherever I go and do, I usually think about 
                what can be done better and how it can be done for a better flow in a context.
                That can be anything, from a business experience to a task at school. All these thoughts I usually 
                see as a puzzle and most puzzles are missing a few pieces. The pieces does not come by 
                themselves but they come with the help of an open mind.
                My motto is, never reject things you see or hear just because it does not fit into your personal 
                preferences, be objective and evaluate all the options.</p>
                <img src={brainp} alt="puzzel-brain" width="150" height="150"></img>
      </section>
      <section>
              <p className="p-about1">In my free time I love to hang out and invent activities with my children. When I'm not with the 
                kids, I like to hang out with friends or just be out in nature and philosophise.</p>
        
        <img src={Natur} alt="Nature mountain views" width="150" height="150"></img>
      </section>
      
    </div>
    
  );
};

export default About;