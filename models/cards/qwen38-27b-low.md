---
type: Model
title: Qwen3.8 27B (low)
creator: Alibaba
license: Open
intelligence_index: 15.6850612405479
price_blended_usd_1m: 0.47
output_speed_tps: 47.88739810729468
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.0, z: 0.47, r: 57.0, estimated: false }  # 전문 지식
  reasoning: { s: 34.7, z: -0.04, r: 49.4, estimated: false }  # 추론
  coding: { s: 54.5, z: 0.49, r: 57.4, estimated: false }  # 코딩
  agentic: { s: 70.2, z: 0.88, r: 63.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.0, z: 0.39, r: 55.8, estimated: false }  # 멀티모달
  long_context: { s: 87.2, z: 1.0, r: 65.0, estimated: false }  # 긴문맥
  instruction: { s: 76.9, z: 0.97, r: 64.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Qwen3.8 27B (low)

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **15.6850612405479**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · 47.88739810729468 t/s · TTFT 5.295167854577604s · 256k ctx` · 가성비 33.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.0 | +0.47 | 실측 | [[gpqa-diamond]] 84.5454545454545%×0.4, [[humanitys-last-exam]] 14.040778498609798%×0.3 |
| 추론 | 49.4 | -0.04 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.5454545454545%×1.0, [[humanitys-last-exam]] 14.040778498609798%×1.0 |
| 코딩 | 57.4 | +0.49 | 실측 | [[scicode]] 40.046296296296305%×1.0 |
| 에이전트 | 63.2 | +0.88 | 실측 | [[gdpval]] 1366.39%×1.0, [[tau3-banking]] 32.1649484536082%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.8 | +0.39 | 실측 | [[mmmu-pro]] 73.757225433526%×1.0 |
| 긴문맥 | 65.0 | +1.0 | 실측 | [[aa-lcr]] 77.3333333333333%×1.0 |
| 지시 따르기 | 64.5 | +0.97 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
