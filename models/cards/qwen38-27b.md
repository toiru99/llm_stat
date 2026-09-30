---
type: Model
title: Qwen3.8 27B
creator: Alibaba
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.47
output_speed_tps: 50.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 30.8, z: -0.53, r: 42.0, estimated: false }  # 전문 지식
  reasoning: { s: 34.0, z: -0.1, r: 48.5, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.43, r: 56.4, estimated: false }  # 코딩
  agentic: { s: 40.5, z: 0.08, r: 51.2, estimated: false }  # 에이전트
  trust: { s: 82.5, z: 2.63, r: 89.4, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.22, r: 53.4, estimated: false }  # 멀티모달
  long_context: { s: 77.5, z: 0.8, r: 62.0, estimated: false }  # 긴문맥
  instruction: { s: 65.7, z: 0.49, r: 57.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Qwen3.8 27B

Alibaba · Open · Unknown · 컨텍스트 256k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · 50.0 t/s · TTFT 3.87s · 256k ctx` · 가성비 42.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.0 | -0.53 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 48.5 | -0.1 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 56.4 | +0.43 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 51.2 | +0.08 | 실측 | [[gdpval]] 28.0%×1.0, [[tau3-banking]] 20.0%×1.0 |
| 신뢰성 | 89.4 | +2.63 | 실측 | [[aa-omniscience]] 82.0%×1.0 |
| 멀티모달 | 53.4 | +0.22 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 62.0 | +0.8 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 57.3 | +0.49 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
