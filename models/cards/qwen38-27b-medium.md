---
type: Model
title: Qwen3.8 27B (medium)
creator: Alibaba
license: Open
intelligence_index: 17.4831648632067
price_blended_usd_1m: 0.47
output_speed_tps: 62.4309356947014
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.0, z: 0.47, r: 57.0, estimated: false }  # 전문 지식
  reasoning: { s: 34.7, z: -0.04, r: 49.4, estimated: false }  # 추론
  coding: { s: 52.8, z: 0.43, r: 56.5, estimated: false }  # 코딩
  agentic: { s: 85.7, z: 1.41, r: 71.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.6, z: 0.42, r: 56.3, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 1.07, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 76.4, z: 0.94, r: 64.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Qwen3.8 27B (medium)

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **17.4831648632067**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · 62.4309356947014 t/s · TTFT 5.57877664830649s · 256k ctx` · 가성비 37.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.0 | +0.47 | 실측 | [[gpqa-diamond]] 84.5454545454545%×0.4, [[humanitys-last-exam]] 14.0871177015755%×0.3 |
| 추론 | 49.4 | -0.04 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.5454545454545%×1.0, [[humanitys-last-exam]] 14.0871177015755%×1.0 |
| 코딩 | 56.5 | +0.43 | 실측 | [[scicode]] 39.0046296296296%×1.0 |
| 에이전트 | 71.2 | +1.41 | 실측 | [[gdpval]] 1390.87%×1.0, [[tau3-banking]] 47.4226804123711%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.3 | +0.42 | 실측 | [[mmmu-pro]] 74.1618497109827%×1.0 |
| 긴문맥 | 66.1 | +1.07 | 실측 | [[aa-lcr]] 79.6666666666667%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
