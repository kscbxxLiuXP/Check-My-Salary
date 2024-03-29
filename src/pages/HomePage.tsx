import { Header } from "@/components/Header/Header.tsx";
import { Info } from "@/components/Info";
import { Card, CardBody, CardHeader, Checkbox, Input } from "@nextui-org/react";
import { useState } from "react";
import { IoWarning } from "react-icons/io5";
import "./HomePage.scss";
import { Dog } from "@/components/Dog";

export function HomePage() {
  const [base_salary, set_base_salary] = useState("4500"); //基础工资base
  const [overtime_salary_base, set_overtime_salary_base] = useState("4500"); //加班工资base
  const [should_attendance, set_should_attendance] = useState("21"); //应出勤
  const [rental_subsidy, set_rental_subsidy] = useState(false); //房补
  const [real_attendance, set_real_attendance] = useState("0"); //实际出勤
  const [personal_leave, set_personal_leave] = useState("0"); //事假
  const [sick_leave, set_sick_leave] = useState("0"); //病假
  const [late, set_late] = useState("0"); //迟到

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
            <Card className="p-10 h-fit w-full ">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">收入</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 gap-5">
                <div className="input-item">
                  <Input
                    type="number"
                    label="基础工资"
                    className=" max-w-[400px] inline-block"
                    value={base_salary}
                    onValueChange={set_base_salary}
                  />
                  <Info>基本工资如4500将作为请假base</Info>
                </div>
                <div className="input-item">
                  <Input
                    type="number"
                    label="加班工资Base"
                    className=" max-w-[400px] inline-block"
                    value={overtime_salary_base}
                    onValueChange={set_overtime_salary_base}
                  />
                  <Info>
                    <div className=" flex flex-row items-center">
                      每一届加班base不同，现在统一4500，可以往高了写自嗨一下
                      <Dog />
                    </div>
                  </Info>
                </div>
                <div className="input-item">
                  <Input
                    type="number"
                    label="当月应出勤"
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
            <Card className="p-10 h-fit mt-4 w-full ">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">扣款</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 gap-5">
                {" "}
                <div className="input-item">
                  <Input
                    type="number"
                    label="事假(天)"
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
          <Card className="p-4 h-fit mt-8 min-w-[200px]">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">大胆预测</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 gap-5">
              <span>基础工资:{base_salary}</span>
              <span>加班工资Base:{overtime_salary_base}</span>
              <span>当月应出勤:{should_attendance}</span>
              <span>房补:{rental_subsidy ? "600" : "0"}</span>
              <span>实际出勤:{real_attendance}</span>
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
