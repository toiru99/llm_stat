---
type: Model
title: Qwen3 Max
creator: Alibaba
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: 1.68
output_speed_tps: 59.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.2, z: 0.12, r: 51.7, estimated: false }  # 전문 지식
  reasoning: { s: 33.0, z: -0.1, r: 48.6, estimated: false }  # 추론
  coding: { s: 52.3, z: 0.2, r: 53.1, estimated: false }  # 코딩
  agentic: { s: 52.5, z: 0.66, r: 59.9, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.78, r: 38.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 57.8, z: 0.25, r: 53.8, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.35, r: 44.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Qwen3 Max

Alibaba · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **24.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $1.2 · 출력 $6.0 · 혼합 $1.68/1M · 59.0 t/s · TTFT 2.41s · 262k ctx` · 가성비 14.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.7 | +0.12 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 48.6 | -0.1 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 53.1 | +0.2 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 20.0%×0.5 |
| 에이전트 | 59.9 | +0.66 | 실측 | [[tau2-bench]] 74.0%×1.0, [[terminal-bench]] 20.0%×1.0 |
| 신뢰성 | 38.4 | -0.78 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.8 | +0.25 | 실측 | [[aa-lcr]] 48.0%×1.0 |
| 지시 따르기 | 44.7 | -0.35 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
