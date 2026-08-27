---
type: Model
title: Qwen3.8 27B (medium)
creator: Alibaba
license: Open
intelligence_index: 44.0
price_blended_usd_1m: 0.435
output_speed_tps: 55.0
context_window: 256000
status: current
size_class: Small
params_b: 27
is_reasoning: true
radar:
  knowledge: { s: 40.6, z: -0.04, r: 49.4, estimated: false }  # 전문 지식
  reasoning: { s: 37.4, z: 0.08, r: 51.1, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.59, r: 58.9, estimated: false }  # 코딩
  agentic: { s: 83.4, z: 1.77, r: 76.5, estimated: false }  # 에이전트
  trust: { s: 36.0, z: 0.3, r: 54.5, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.56, r: 58.4, estimated: false }  # 멀티모달
  long_context: { s: 91.6, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 77.2, z: 0.93, r: 63.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Qwen3.8 27B (medium)

Alibaba · Open · Small(27B) · 컨텍스트 256k · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 55.0 t/s · TTFT 3.58s · 256k ctx` · 가성비 101.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.4 | -0.04 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 51.1 | +0.08 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 58.9 | +0.59 | 실측 | [[scicode]] 38.0%×1.0 |
| 에이전트 | 76.5 | +1.77 | 실측 | [[gdpval]] 50.0%×1.0, [[tau3-banking]] 47.0%×1.0 |
| 신뢰성 | 54.5 | +0.3 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | 58.4 | +0.56 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 63.9 | +0.93 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
