---
type: Model
title: Step 3.7 Flash
creator: StepFun
license: Open
intelligence_index: None
price_blended_usd_1m: 0.183
output_speed_tps: 139.66012125140938
context_window: 262144
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.9, z: 0.56, r: 58.4, estimated: false }  # 전문 지식
  reasoning: { s: 38.8, z: 0.16, r: 52.4, estimated: false }  # 추론
  coding: { s: 58.5, z: 0.63, r: 59.4, estimated: false }  # 코딩
  agentic: { s: 58.1, z: 0.46, r: 56.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.1, z: 0.5, r: 57.4, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.87, r: 63.1, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.99, r: 64.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.7 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Step 3.7 Flash

StepFun · Open · Large · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.2 · 출력 $1.15 · 혼합 $0.183/1M · 139.66012125140938 t/s · TTFT 2.8454226695999485s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.4 | +0.56 | 실측 | [[gpqa-diamond]] 80.90909090909089%×0.4, [[humanitys-last-exam]] 21.408711770157602%×0.3 |
| 추론 | 52.4 | +0.16 | 실측 | [[critpt]] 2.28571428571429%×1.0, [[gpqa-diamond]] 80.90909090909089%×1.0, [[humanitys-last-exam]] 21.408711770157602%×1.0 |
| 코딩 | 59.4 | +0.63 | 실측 | [[scicode]] 43.8657407407407%×1.0, [[terminal-bench]] 35.6060606060606%×0.5 |
| 에이전트 | 56.8 | +0.46 | 실측 | [[gdpval]] 863.73%×1.0, [[tau2-bench]] 98.5380116959064%×1.0, [[tau3-banking]] 11.9587628865979%×1.0, [[terminal-bench]] 35.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.4 | +0.5 | 실측 | [[mmmu-pro]] 75.3179190751445%×1.0 |
| 긴문맥 | 63.1 | +0.87 | 실측 | [[aa-lcr]] 73.6666666666667%×1.0 |
| 지시 따르기 | 64.8 | +0.99 | 실측 | [[ifbench]] 67.2789115646258%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
