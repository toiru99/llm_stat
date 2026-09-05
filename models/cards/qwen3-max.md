---
type: Model
title: Qwen3 Max
creator: Alibaba
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 1.68
output_speed_tps: 46.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.5, z: 0.08, r: 51.1, estimated: false }  # 전문 지식
  reasoning: { s: 31.9, z: -0.15, r: 47.7, estimated: false }  # 추론
  coding: { s: 30.3, z: -0.06, r: 49.1, estimated: false }  # 코딩
  agentic: { s: 52.5, z: 0.58, r: 58.6, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.76, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 56.2, z: 0.22, r: 53.3, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.31, r: 45.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Qwen3 Max

Alibaba · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $1.2 · 출력 $6.0 · 혼합 $1.68/1M · 46.0 t/s · TTFT 2.48s · 262k ctx` · 가성비 10.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.1 | +0.08 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 47.7 | -0.15 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 49.1 | -0.06 | 실측 | [[terminal-bench]] 20.0%×0.5 |
| 에이전트 | 58.6 | +0.58 | 실측 | [[tau2-bench]] 74.0%×1.0, [[terminal-bench]] 20.0%×1.0 |
| 신뢰성 | 38.5 | -0.76 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.3 | +0.22 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 45.3 | -0.31 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
