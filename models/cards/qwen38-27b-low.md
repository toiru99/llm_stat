---
type: Model
title: Qwen3.8 27B (low)
creator: Alibaba
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.435
output_speed_tps: 51.0
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 39.3, z: -0.12, r: 48.3, estimated: false }  # 전문 지식
  reasoning: { s: 36.3, z: 0.03, r: 50.4, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.69, r: 60.3, estimated: false }  # 코딩
  agentic: { s: 62.7, z: 0.95, r: 64.3, estimated: false }  # 에이전트
  trust: { s: 46.4, z: 0.96, r: 64.4, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.52, r: 57.8, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.09, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 66.8, z: 0.54, r: 58.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Qwen3.8 27B (low)

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 신뢰성
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 51.0 t/s · TTFT 3.85s · 256k ctx` · 가성비 59.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.3 | -0.12 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 50.4 | +0.03 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 60.3 | +0.69 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 64.3 | +0.95 | 실측 | [[gdpval]] 42.0%×1.0, [[tau3-banking]] 32.0%×1.0 |
| 신뢰성 | 64.4 | +0.96 | 실측 | [[aa-omniscience]] 47.0%×1.0 |
| 멀티모달 | 57.8 | +0.52 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 66.4 | +1.09 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 58.2 | +0.54 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
