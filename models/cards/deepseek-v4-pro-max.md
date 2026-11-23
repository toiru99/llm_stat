---
type: Model
title: DeepSeek V4 Pro (max)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.7148
output_speed_tps: 69.3092700043962
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.6, z: 1.27, r: 69.0, estimated: false }  # 전문 지식
  reasoning: { s: 59.1, z: 1.16, r: 67.4, estimated: false }  # 추론
  coding: { s: 71.5, z: 1.07, r: 66.0, estimated: false }  # 코딩
  agentic: { s: 73.7, z: 1.0, r: 64.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 90.4, z: 1.53, r: 72.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# DeepSeek V4 Pro (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $1.50162 · 출력 $3.2 · 혼합 $0.7148/1M · 69.3092700043962 t/s · TTFT 2.26206377395552s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.0 | +1.27 | 실측 | [[gpqa-diamond]] 88.78787878787881%×0.4, [[humanitys-last-exam]] 37.5347544022243%×0.3 |
| 추론 | 67.4 | +1.16 | 실측 | [[critpt]] 12.8571428571429%×1.0, [[gpqa-diamond]] 88.78787878787881%×1.0, [[humanitys-last-exam]] 37.5347544022243%×1.0 |
| 코딩 | 66.0 | +1.07 | 실측 | [[scicode]] 50.8101851851852%×1.0, [[terminal-bench]] 46.2121212121212%×0.5 |
| 에이전트 | 64.9 | +1.0 | 실측 | [[gdpval]] 1165.77%×1.0, [[tau2-bench]] 96.19883040935669%×1.0, [[tau3-banking]] 30.103092783505197%×1.0, [[terminal-bench]] 46.2121212121212%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 74.6666666666667%×1.0 |
| 지시 따르기 | 72.9 | +1.53 | 실측 | [[ifbench]] 76.4625850340136%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
