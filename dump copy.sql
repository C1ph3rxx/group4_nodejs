

DROP TABLE IF EXISTS "user";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE "user" (
  "email" varchar(255) NOT NULL,
  "isActive" boolean NOT NULL DEFAULT FALSE,
  "age" integer NOT NULL,
  "password" varchar(255) NOT NULL,
  "firstname" varchar(255) NOT NULL,
  "lastname" varchar(255) NOT NULL,
  "gender" varchar(255) NOT NULL,
  "phone" varchar(255) NOT NULL,
  "dob" timestamptz NOT NULL,
  "picture" varchar(255) NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT CURRENT_DATE,
  "id" UUID DEFAULT gen_random_uuid(),
  PRIMARY KEY ("id")
);
/*!40101 SET character_set_client = @saved_cs_client */;



INSERT INTO "user" VALUES ('rafaela.rocha@example.com',FALSE,75,'ohyeah','Rafaela','Rocha','female','(42) 1064-6873','1949-12-30T09:23:29.204Z','https://randomuser.me/api/portraits/thumb/women/53.jpg','2025-02-08 21:00:41.211350'),('marilde.cardoso@example.com',FALSE,68,'qiang','Marilde','Cardoso','female','(25) 6256-9219','1956-06-19T22:32:54.917Z','https://randomuser.me/api/portraits/thumb/women/12.jpg','2025-02-08 21:00:41.325491'),('semirad.vdovenko@example.com',FALSE,51,'lily','Semirad','Vdovenko','male','(067) D97-7099','1973-12-28T02:08:59.290Z','https://randomuser.me/api/portraits/thumb/men/9.jpg','2025-02-08 21:00:40.944501'),('liva.sorensen@example.com',FALSE,36,'pounding','Liva','Sørensen','female','13504470','1989-02-03T02:31:38.074Z','https://randomuser.me/api/portraits/thumb/women/81.jpg','2025-02-08 21:00:40.047774'),('dorothee.nelles@example.com',FALSE,46,'trout','Dorothee','Nelles','female','0800-7773415','1978-03-19T23:49:35.410Z','https://randomuser.me/api/portraits/thumb/women/61.jpg','2025-02-08 21:00:41.348674'),('jorge.prieto@example.com',FALSE,29,'hotmail0','Jorge','Prieto','male','907-298-444','1995-02-25T23:44:35.911Z','https://randomuser.me/api/portraits/thumb/men/41.jpg','2025-02-08 21:00:40.206171'),('elsa.toivonen@example.com',FALSE,34,'franky','Elsa','Toivonen','female','02-277-133','1990-12-24T11:38:26.259Z','https://randomuser.me/api/portraits/thumb/women/29.jpg','2025-02-08 21:00:40.811874'),('jamie.hudson@example.com',FALSE,66,'zzzzzz','Jamie','Hudson','male','041-965-5281','1958-10-30T23:53:29.437Z','https://randomuser.me/api/portraits/thumb/men/29.jpg','2025-02-08 21:00:41.031867'),('brennan.terry@example.com',FALSE,44,'rightnow','Brennan','Terry','male','0112983 333 6191','1980-05-22T14:16:46.122Z','https://randomuser.me/api/portraits/thumb/men/55.jpg','2025-02-08 21:00:40.269042'),('willow.thomas@example.com',TRUE,24,'barbie','Willow','Thomas','female','(840)-927-4430','2000-06-01T07:20:09.391Z','https://randomuser.me/api/portraits/thumb/women/55.jpg','2025-02-08 21:00:41.359524'),('caleb.bennett@example.com',FALSE,37,'queen','Caleb','Bennett','male','06-1031-7700','1987-05-20T10:46:32.116Z','https://randomuser.me/api/portraits/thumb/men/85.jpg','2025-02-08 21:00:41.391077'),('emil.mikkola@example.com',FALSE,57,'dodger','Emil','Mikkola','male','05-534-175','1967-04-04T18:40:12.256Z','https://randomuser.me/api/portraits/thumb/men/17.jpg','2025-02-08 21:00:40.814051'),('jonas.sorensen@example.com',FALSE,77,'dynasty','Jonas','Sørensen','male','50669988','1947-06-01T11:53:26.425Z','https://randomuser.me/api/portraits/thumb/men/86.jpg','2025-02-08 21:00:40.678457'),('mar.darocha@example.com',FALSE,79,'ellen','Mar','da Rocha','male','(88) 2706-2279','1945-12-05T23:06:45.194Z','https://randomuser.me/api/portraits/thumb/men/12.jpg','2025-02-08 21:00:40.726218'),('carolina.vargas@example.com',FALSE,48,'face','Carolina','Vargas','female','907-189-768','1977-01-18T02:48:40.516Z','https://randomuser.me/api/portraits/thumb/women/54.jpg','2025-02-08 21:00:40.696413'),('tracy.knight@example.com',FALSE,44,'aaaaa1','Tracy','Knight','female','021-285-6328','1980-08-21T09:23:22.348Z','https://randomuser.me/api/portraits/thumb/women/6.jpg','2025-02-08 21:00:41.217569'),('wolf-rudiger.stelter@example.com',FALSE,36,'pumpkin','Wolf-Rüdiger','Stelter','male','0653-6637825','1988-10-23T13:47:22.717Z','https://randomuser.me/api/portraits/thumb/men/15.jpg','2025-02-08 21:00:40.157002'),('ege.elciboga@example.com',FALSE,39,'ramirez','Ege','Elçiboğa','male','(993)-267-6894','1985-03-21T11:56:57.096Z','https://randomuser.me/api/portraits/thumb/men/82.jpg','2025-02-08 21:00:40.757536'),('rosa.burgos@example.com',FALSE,58,'peterpan','Rosa','Burgos','female','(672) 143 4540','1966-05-05T19:47:11.477Z','https://randomuser.me/api/portraits/thumb/women/0.jpg','2025-02-08 21:00:41.350273')