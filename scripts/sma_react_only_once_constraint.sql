alter table "WKSP_TRUNGUSINGORACLEAPEX"."SMA_REACTIONS" add constraint
"SMA_REACT_ONLY_ONCE_1_POST" unique ( "POST_ID", "CREATED_BY" );