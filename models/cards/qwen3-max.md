---
type: Model
title: Qwen3 Max
creator: Alibaba
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: 1.68
output_speed_tps: 54.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 44.4, z: 0.2, r: 53.0, estimated: false }  # 전문 지식
  reasoning: { s: 32.6, z: -0.04, r: 49.3, estimated: false }  # 추론
  coding: { s: 52.3, z: 0.27, r: 54.0, estimated: false }  # 코딩
  agentic: { s: 52.5, z: 0.64, r: 59.5, estimated: false }  # 에이전트
  trust: { s: 11.8, z: -0.76, r: 38.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 61.8, z: 0.4, r: 56.0, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.3, r: 45.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# Qwen3 Max

Alibaba · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **24.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $1.2 · 출력 $6.0 · 혼합 $1.68/1M · 54.0 t/s · TTFT 2.54s · 262k ctx` · 가성비 14.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.0 | +0.2 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 49.3 | -0.04 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 54.0 | +0.27 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 20.0%×0.5 |
| 에이전트 | 59.5 | +0.64 | 실측 | [[tau2-bench]] 74.0%×1.0, [[terminal-bench]] 20.0%×1.0 |
| 신뢰성 | 38.6 | -0.76 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.0 | +0.4 | 실측 | [[aa-lcr]] 47.0%×1.0 |
| 지시 따르기 | 45.5 | -0.3 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
