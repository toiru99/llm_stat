---
type: Model
title: Step3 VL 10B
creator: StepFun
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65536
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.8, z: -0.12, r: 48.2, estimated: false }  # 전문 지식
  reasoning: { s: 27.3, z: -0.41, r: 43.9, estimated: false }  # 추론
  coding: { s: 8.0, z: -1.08, r: 33.7, estimated: false }  # 코딩
  agentic: { s: 12.1, z: -1.13, r: 33.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 66.0, z: -0.28, r: 45.9, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 53.5, z: -0.02, r: 49.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step3 VL 10B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Step3 VL 10B

StepFun · Open · Small · 컨텍스트 65k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.2 | -0.12 | 실측 | [[gpqa-diamond]] 68.989898989899%×0.4, [[humanitys-last-exam]] 10.8433734939759%×0.3 |
| 추론 | 43.9 | -0.41 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.989898989899%×1.0, [[humanitys-last-exam]] 10.8433734939759%×1.0 |
| 코딩 | 33.7 | -1.08 | 실측 | [[terminal-bench]] 5.3030303030303%×0.5 |
| 에이전트 | 33.0 | -1.13 | 실측 | [[tau2-bench]] 16.0818713450292%×1.0, [[terminal-bench]] 5.3030303030303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.9 | -0.28 | 실측 | [[mmmu-pro]] 63.9884393063584%×1.0 |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 49.8 | -0.02 | 실측 | [[ifbench]] 50.2040816326531%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
