---
type: Model
title: GLM-5.2 (max)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.902
output_speed_tps: 58.6630133915028
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.1, z: 1.39, r: 70.8, estimated: false }  # 전문 지식
  reasoning: { s: 68.4, z: 1.62, r: 74.3, estimated: false }  # 추론
  coding: { s: 74.2, z: 1.16, r: 67.4, estimated: false }  # 코딩
  agentic: { s: 80.7, z: 1.24, r: 68.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 86.0, z: 1.34, r: 70.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GLM-5.2 (max)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 58.6630133915028 t/s · TTFT 2.42510063592773s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.8 | +1.39 | 실측 | [[gpqa-diamond]] 89.49494949494951%×0.4, [[humanitys-last-exam]] 41.1492122335496%×0.3 |
| 추론 | 74.3 | +1.62 | 실측 | [[critpt]] 20.8571428571429%×1.0, [[gpqa-diamond]] 89.49494949494951%×1.0, [[humanitys-last-exam]] 41.1492122335496%×1.0 |
| 코딩 | 67.4 | +1.16 | 실측 | [[scicode]] 51.1574074074074%×1.0, [[terminal-bench]] 50.7575757575758%×0.5 |
| 에이전트 | 68.6 | +1.24 | 실측 | [[gdpval]] 1380.2%×1.0, [[tau2-bench]] 99.1228070175439%×1.0, [[tau3-banking]] 34.639175257732%×1.0, [[terminal-bench]] 50.7575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 78.3333333333333%×1.0 |
| 지시 따르기 | 70.1 | +1.34 | 실측 | [[ifbench]] 73.3333333333333%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
