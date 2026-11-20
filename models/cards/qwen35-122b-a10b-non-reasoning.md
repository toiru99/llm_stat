---
type: Model
title: Qwen3.5 122B A10B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.68
output_speed_tps: 96.0792491893492
context_window: 262144
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.9, z: 0.46, r: 56.9, estimated: false }  # 전문 지식
  reasoning: { s: 35.7, z: 0.01, r: 50.1, estimated: false }  # 추론
  coding: { s: 44.8, z: 0.16, r: 52.5, estimated: false }  # 코딩
  agentic: { s: 49.8, z: 0.17, r: 52.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.4, z: 0.15, r: 52.3, estimated: false }  # 멀티모달
  long_context: { s: 69.2, z: 0.46, r: 56.9, estimated: false }  # 긴문맥
  instruction: { s: 54.3, z: 0.02, r: 50.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 122B A10B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Qwen3.5 122B A10B (non-reasoning)

Alibaba · Open · Medium · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.4 · 출력 $3.2 · 혼합 $0.68/1M · 96.0792491893492 t/s · TTFT 4.51572097766963s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.9 | +0.46 | 실측 | [[gpqa-diamond]] 82.7272727272727%×0.4, [[humanitys-last-exam]] 15.940685820203901%×0.3 |
| 추론 | 50.1 | +0.01 | 실측 | [[critpt]] 0.857142857142857%×1.0, [[gpqa-diamond]] 82.7272727272727%×1.0, [[humanitys-last-exam]] 15.940685820203901%×1.0 |
| 코딩 | 52.5 | +0.16 | 실측 | [[terminal-bench]] 29.545454545454504%×0.5 |
| 에이전트 | 52.6 | +0.17 | 실측 | [[gdpval]] 715.87%×1.0, [[tau2-bench]] 84.5029239766082%×1.0, [[tau3-banking]] 10.3092783505155%×1.0, [[terminal-bench]] 29.545454545454504%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.3 | +0.15 | 실측 | [[mmmu-pro]] 70.2890173410405%×1.0 |
| 긴문맥 | 56.9 | +0.46 | 실측 | [[aa-lcr]] 61.33333333333329%×1.0 |
| 지시 따르기 | 50.3 | +0.02 | 실측 | [[ifbench]] 50.8163265306122%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
