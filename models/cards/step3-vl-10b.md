---
type: Model
title: Step3 VL 10B
creator: StepFun
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65500
status: current
size_class: Small
params_b: 10.2
is_reasoning: true
radar:
  knowledge: { s: 30.6, z: -0.5, r: 42.5, estimated: false }  # 전문 지식
  reasoning: { s: 29.3, z: -0.3, r: 45.6, estimated: false }  # 추론
  coding: { s: 37.0, z: -0.46, r: 43.1, estimated: false }  # 코딩
  agentic: { s: 11.9, z: -0.97, r: 35.4, estimated: false }  # 에이전트
  trust: { s: 17.4, z: -0.42, r: 43.6, estimated: false }  # 신뢰성
  multimodal: { s: 70.0, z: -0.11, r: 48.3, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.52, r: 27.2, estimated: false }  # 긴문맥
  instruction: { s: 53.5, z: -0.03, r: 49.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step3 VL 10B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# Step3 VL 10B

StepFun · Open · Small(10.2B) · 컨텍스트 65k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 멀티모달
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.5 | -0.5 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 45.6 | -0.3 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 43.1 | -0.46 | 실측 | [[scicode]] 31.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 35.4 | -0.97 | 실측 | [[tau2-bench]] 16.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 43.6 | -0.42 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 48.3 | -0.11 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 27.2 | -1.52 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 49.6 | -0.03 | 실측 | [[ifbench]] 50.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
