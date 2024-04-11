import { Header } from "@/components/Header/Header.tsx";
import { Info } from "@/components/Info";
import { Card, CardBody, CardHeader, Checkbox, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IoWarning } from "react-icons/io5";
import "./HomePage.scss";
import { Dog } from "@/components/Dog";

export function HomePage() {
  const [base_salary, set_base_salary] = useState("4500"); //基础工资base
  const [overtime_salary_base, set_overtime_salary_base] = useState("4500"); //加班工资base
  const [should_attendance, set_should_attendance] = useState("21"); //应出勤
  const [rental_subsidy, set_rental_subsidy] = useState(false); //房补
  const [real_attendance, set_real_attendance] = useState("0"); //实际出勤

  const [overtime_night, set_overtime_night] = useState("0"); //晚上加班
  const [overtime_weekdend, set_overtime_weekend] = useState("0"); //晚上加班

  const [personal_leave, set_personal_leave] = useState("0"); //事假
  const [sick_leave, set_sick_leave] = useState("0"); //病假
  const [late, set_late] = useState("0"); //迟到
  const [data, set_data] = useState({});
  useEffect(() => {
    const work_day = 21.75;
    console.log("法定工作天数", work_day);

    const work_hour = 8;
    console.log("每天工作小时", work_hour);

    const base_per_hour = Number(base_salary) / work_day / work_hour; //
    const base_per_day = base_per_hour * work_hour; //不影响基础工资，影响扣款
    console.log("每小时基础工资", base_per_hour);
    console.log("每天基础工资", base_per_day);

    const overtime_per_hour =
      Number(overtime_salary_base) / work_day / work_hour;
    console.log("每小时加班工资base", overtime_per_hour);

    const overtime_night_ratio = 1.5;
    const overtime_weekend_ratio = 2;
    console.log("晚上加班倍率", overtime_night_ratio);
    console.log("周末加班倍率", overtime_weekend_ratio);

    const overtime_night_hour = 2;
    const overtime_weekend_hour = 8;
    console.log("晚上加班小时", overtime_night_hour);
    console.log("周末加班小时", overtime_weekend_hour);

    const overtime_per_night =
      overtime_night_hour * overtime_per_hour * overtime_night_ratio;
    console.log("每晚加班工资", overtime_per_night);

    const overtime_per_day =
      overtime_per_hour * overtime_weekend_hour * overtime_weekend_ratio;
    console.log("每天加班工资", overtime_per_day);

    const leave_per_hour = base_per_day / 8;
    const leave_per_day = base_per_day;
    const sick_leave_per_hour = base_per_day / 8;
    const sick_leave_per_day = base_per_day;
  }, []);
  const get_my_salary = () => {
    const data = Object.create(null);
    data.base_salary = 1;
    //base4500 + 加班 +餐补+房补+绩效 - 扣款

    const work_day = 21.75;
    console.log("法定工作天数", work_day);

    const work_hour = 8;
    console.log("每天工作小时", work_hour);

    const base_per_hour = Number(base_salary) / work_day / work_hour; //
    const base_per_day = base_per_hour * work_hour; //不影响基础工资，影响扣款
    console.log("每小时基础工资", base_per_hour);
    console.log("每天基础工资", base_per_day);

    const overtime_per_hour =
      Number(overtime_salary_base) / work_day / work_hour;
    console.log("每小时加班工资base", overtime_per_hour);

    const overtime_night_ratio = 1.5;
    const overtime_weekend_ratio = 2;
    console.log("晚上加班倍率", overtime_night_ratio);
    console.log("周末加班倍率", overtime_weekend_ratio);

    const overtime_night_hour = 2;
    const overtime_weekend_hour = 8;
    console.log("晚上加班小时", overtime_night_hour);
    console.log("周末加班小时", overtime_weekend_hour);

    const overtime_per_night =
      overtime_night_hour * overtime_per_hour * overtime_night_ratio;
    console.log("每晚加班工资", overtime_per_night);

    const overtime_per_day =
      overtime_per_hour * overtime_weekend_hour * overtime_weekend_ratio;
    console.log("每天加班工资", overtime_per_day);

    const leave_per_hour = base_per_day / 8;
    const leave_per_day = base_per_day;
    const sick_leave_per_hour = base_per_day / 8;
    const sick_leave_per_day = base_per_day;

    const overtime_night = 1;
    const overtime_weekend = 2;

    const meal_subsidy = 20 * Math.ceil(Number(real_attendance));
    const rental_subsidy_m = rental_subsidy ? 600 : 0;
    const overtime_night_count = 1.5 * overtime_night * 2;
    const overtime_weekend_count = 2 * overtime_weekend * 8;

    const personal_leave_count = Number(personal_leave) * leave_per_day;

    const sick_leave_count = Number(sick_leave) * sick_leave_per_day;

    const late_count = Number(late) * leave_per_hour;

    const total =
      Number(base_salary) +
      meal_subsidy +
      rental_subsidy_m +
      overtime_night_count +
      overtime_weekend_count -
      personal_leave_count -
      sick_leave_count -
      late_count;

    console.log(total);
    return;
  };

  useEffect(() => {
    const data = Object.create(null);
    data.base_salary = base_salary;
    data.overtime_salary_base = overtime_salary_base;
    data.should_attendance = should_attendance;
    data.rental_subsidy = rental_subsidy;
    data.real_attendance = real_attendance;
    data.personal_leave = personal_leave;
    data.sick_leave = sick_leave;
    data.late = late;

    set_data(data);
  }, [
    base_salary,
    overtime_salary_base,
    should_attendance,
    real_attendance,
    rental_subsidy,
    personal_leave,
    sick_leave,
    late
  ]);
  // const get_my_salary = () => {
  //   const data = Object.create(null);
  //   data.base_salary = 1;
  //   //base4500 + 加班 +餐补+房补+绩效 - 扣款
  //   return;
  // };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="justify-center w-full flex gap-6">
          <div className="p-4 h-fit w-fit">
            <Card className="container  p-4 my-4 w-full flex flex-row items-center gap-4">
              <IoWarning className="   text-large" />
              声明：本网页不会保存任何数据，所提供的结果仅供参考和娱乐用途！
            </Card>
            <Card className="p-4 h-fit w-full ">
              <CardHeader className="p-4 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">基本收入</h4>
              </CardHeader>
              <CardBody className="p-10 overflow-visible py-2 gap-5">
                <div className="input-item">
                  <Input
                    variant="faded"
                    type="number"
                    label="基础工资"
                    placeholder="请输入基础工资"
                    labelPlacement="outside"
                    className=" max-w-[400px] inline-block"
                    value={base_salary}
                    onValueChange={set_base_salary}
                  />
                  <Info>基本工资如4500将作为请假base</Info>
                </div>
                <div className="input-item">
                  <Input
                    type="number"
                    variant="faded"
                    label="加班工资Base"
                    labelPlacement="outside"
                    placeholder="请输入加班工资Base"
                    className=" max-w-[400px] inline-block"
                    value={overtime_salary_base}
                    onValueChange={set_overtime_salary_base}
                  />
                  <Info>
                    <div className=" flex flex-row items-center">
                      可以往高了写自嗨一下
                      <Dog />
                    </div>
                  </Info>
                </div>
                <div className="input-item">
                  <Input
                    type="number"
                    label="当月应出勤"
                    variant="faded"
                    labelPlacement="outside"
                    className=" max-w-[400px] inline-block"
                    value={should_attendance}
                    onValueChange={set_should_attendance}
                  />
                  <Info>此项决定请假扣工资的base</Info>
                </div>
                <div className="input-item">
                  <Input
                    type="number"
                    label="实际出勤"
                    variant="faded"
                    labelPlacement="outside"
                    className=" max-w-[400px] inline-block"
                    value={real_attendance}
                    onValueChange={set_real_attendance}
                  />
                  <Info>此项影响餐补</Info>
                </div>
                <div className=" flex flex-row items-center">
                  <Checkbox
                    isSelected={rental_subsidy}
                    onValueChange={set_rental_subsidy}
                  >
                    房补
                  </Checkbox>
                  <Info>额外600元</Info>
                </div>
              </CardBody>
            </Card>
            <Card className="p-4 h-fit mt-4 w-full ">
              <CardHeader className="p-4 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">加班</h4>
              </CardHeader>
              <CardBody className="p-10 overflow-visible py-2 gap-5">
                {" "}
                <div className="input-item">
                  <Input
                    type="number"
                    label="工作日加班"
                    variant="faded"
                    labelPlacement="outside"
                    placeholder="0"
                    className=" max-w-[400px]"
                    value={personal_leave}
                    onValueChange={set_personal_leave}
                  />
                  <Info>此项扣除当天100%</Info>
                </div>
                <div className="input-item">
                  <Input
                    type="number"
                    label="周末加班"
                    variant="faded"
                    labelPlacement="outside"
                    className=" max-w-[400px] inline-block"
                    value={sick_leave}
                    onValueChange={set_sick_leave}
                  />
                  <Info>第1天扣20%，之后扣除当天80%</Info>
                </div>
                <div className="input-item">
                  <Input
                    type="number"
                    variant="faded"
                    label="迟到(小时)"
                    labelPlacement="outside"
                    className=" max-w-[400px] inline-block"
                    value={late}
                    onValueChange={set_late}
                  />
                  <Info>第1天扣20%，之后扣除当天80%</Info>
                </div>
              </CardBody>
            </Card>
            <Card className="p-4 h-fit mt-4 w-full ">
              <CardHeader className="p-4 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">扣款</h4>
              </CardHeader>
              <CardBody className="p-10 overflow-visible py-2 gap-5">
                {" "}
                <div className="input-item">
                  <Input
                    type="number"
                    label="事假(天)"
                    variant="faded"
                    labelPlacement="outside"
                    placeholder="0"
                    className=" max-w-[400px]"
                    value={personal_leave}
                    onValueChange={set_personal_leave}
                  />
                  <Info>此项扣除当天100%</Info>
                </div>
                <div className="input-item">
                  <Input
                    type="number"
                    label="病假(天)"
                    variant="faded"
                    labelPlacement="outside"
                    className=" max-w-[400px] inline-block"
                    value={sick_leave}
                    onValueChange={set_sick_leave}
                  />
                  <Info>第1天扣20%，之后扣除当天80%</Info>
                </div>
                <div className="input-item">
                  <Input
                    type="number"
                    variant="faded"
                    label="迟到(小时)"
                    labelPlacement="outside"
                    className=" max-w-[400px] inline-block"
                    value={late}
                    onValueChange={set_late}
                  />
                  <Info>第1天扣20%，之后扣除当天80%</Info>
                </div>
              </CardBody>
            </Card>
          </div>
          <Card className="p-4 h-fit mt-8 min-w-[200px] ">
            <CardHeader className="p-4 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">大胆预测</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 gap-5">
              <Card
                className="  text-xs border-none bg-background/60 dark:bg-default-100/50"
                isBlurred
              >
                <CardHeader>基本数值</CardHeader>
                <CardBody>
                  <div>法定工作天数：</div>
                  <div>工作日时长：</div>
                  <div>周末每日时长：</div>
                  <div>晚上加班时长：</div>
                  <div>晚上加班倍率：</div>
                  <div>加班倍率：</div>
                </CardBody>
              </Card>
              <Card className="  text-xs" isBlurred>
                <CardHeader>常数项</CardHeader>
                <CardBody>
                  <div>法定工作天数：</div>
                  <div>工作日时长：</div>
                  <div>周末每日时长：</div>
                  <div>晚上加班时长：</div>
                  <div>晚上加班倍率：</div>
                  <div>加班倍率：</div>
                </CardBody>
              </Card>
              <span>基础工资:{data?.base_salary}</span>
              <span>加班工资Base:{data?.overtime_salary_base}</span>
              <span>当月应出勤:{data?.should_attendance}</span>
              <span>房补:{data?.rental_subsidy ? "600" : "0"}</span>
              <span>实际出勤:{data?.real_attendance}</span>
            </CardBody>
          </Card>
        </div>
        <div className="footer flex flex-col justify-center items-center">
          <p>@半透明的墙</p>
          <p>© 2024 All rights reserved. </p>
        </div>
      </div>
    </>
  );
}
