/*
@Author: Lwandle Babekizulu Dlamini
@Desc: An algorithm library for measuring team efficiency
*/

class Activate {
  //each weight takes in a value between 0.00 - 1.00
  constructor(
    resBrain,
    resWork,
    resNetwork,
    creFluency,
    creOriginality,
    creFlexibility,
    stratDevelopment,
    stratPlanning,
    stratMapping,
    knConsumption,
    knProcessing,
    knProduction,
  ) {
    this.resBrain = resBrain;
    this.resWork = resWork;
    this.resNetwork = resNetwork;
    this.creFluency = creFluency;
    this.creOriginality = creOriginality;
    this.creFlexibility = creFlexibility;
    this.stratDevelopment = stratDevelopment;
    this.stratPlanning = stratPlanning;
    this.stratMapping = stratMapping;
    this.knConsumption = knConsumption;
    this.knProcessing = knProcessing;
    this.knProduction = knProduction;
  }
  resourceActivation() {
    //activation algorithm based on resource contributons
    /*
    @params:
    - brain resource contribution (researchers) [1/3]
    - work resource contribution (developers) [1/3]
    - network resource contribution (people that connect people) [1/3]
    */
    const brain = this.resBrain;
    const work = this.resWork;
    const network = this.resNetwork;
    const weight = () => {
      return parseFloat((brain + work + network) * (1 / 3)).toFixed(3);
    };
    weight();
  }
  creativityActivation() {
    //activation algorithm based on creative contributions
    /*
    @params: 
    - fluency contribution [1/3]
    - originality contribution [1/3]
    - flexibility contribution [1/3]
    */
    const fluency = this.creFluency;
    const originality = this.creOriginality;
    const flexibility = this.creFlexibility;
    const weight = () => {
      return parseFloat(
        (fluency + originality + flexibility) * (1 / 3),
      ).toFixed(3);
    };
    weight();
  }
  strategyActivation() {
    //activation algorithm based on strategy contributions
    /*
    @params:
    - strategy development [1/3]
    - strategy plannng [1/3]
    - strategy mapping [1/3]
    */
    const development = this.stratDevelopment;
    const planning = this.stratPlanning;
    const mapping = this.stratMapping;
    const weight = () => {
      return parseFloat((development + planning + mapping) * (1 / 3)).toFixed(
        3,
      );
    };
    weight();
  }
  knowledgeActivation() {
    //activation algorithm based on knowledge contributions
    /*
    @params:
    - knowledge consumption [1/3]
    - knowledge processing [1/3]
    - knowledge production [1/3]
    */
    const consumption = this.knConsumption;
    const processing = this.knProcessing;
    const production = this.knProduction;
    const weight = () => {
      return parseFloat(
        (consumption + processing + production) * (1 / 3),
      ).toFixed(3);
    };
    weight();
  }
  ideaActivaton() {
    //activaton algorithm based on the  sum of contribution activation points
    /*
    @desc: sums and averages weights to determine activation score
    */
    const weight1 = parseFloat(this.resourceActivation());
    const weight2 = parseFloat(this.creativityActivation());
    const weight3 = parseFloat(this.knowledgeActivation());
    console.log(((weight1 + weight2 + weight3) / 3) * 100);
    return ((weight1 + weight2 + weight3) / 3) * 100;
  }
}

export default Activate;
