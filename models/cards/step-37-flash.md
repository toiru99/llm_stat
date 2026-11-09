---
type: Model
title: Step 3.7 Flash
creator: StepFun
license: Open
intelligence_index: None
price_blended_usd_1m: 0.183
output_speed_tps: None
context_window: 262000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.4, z: 0.53, r: 58.0, estimated: false }  # 전문 지식
  reasoning: { s: 57.9, z: 0.56, r: 58.4, estimated: false }  # 추론
  coding: { s: 59.1, z: 0.72, r: 60.8, estimated: false }  # 코딩
  agentic: { s: 41.4, z: 0.24, r: 53.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.1, z: 0.49, r: 57.3, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.05, r: 65.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.7 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Step 3.7 Flash

StepFun · Open · Large · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $1.15 · 혼합 $0.183/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.0 | +0.53 | 실측 | [[gpqa-diamond]] 80.9%×0.4, [[humanitys-last-exam]] 21.4%×0.3 |
| 추론 | 58.4 | +0.56 | 실측 | [[gpqa-diamond]] 80.9%×1.0, [[humanitys-last-exam]] 21.4%×1.0 |
| 코딩 | 60.8 | +0.72 | 실측 | [[scicode]] 43.9%×1.0, [[terminal-bench]] 35.6%×0.5 |
| 에이전트 | 53.6 | +0.24 | 실측 | [[apex-agents]] 14.8%×1.0, [[gdpval]] 864.0%×1.0, [[itbench]] 30.3%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 35.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.3 | +0.49 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 73.7%×1.0 |
| 지시 따르기 | 65.7 | +1.05 | 실측 | [[ifbench]] 67.3%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
