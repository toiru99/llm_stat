---
type: Model
title: Qwen3 Max (Preview)
creator: Alibaba
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: 1.68
output_speed_tps: 59.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.4, z: 0.04, r: 50.7, estimated: false }  # 전문 지식
  reasoning: { s: 32.5, z: -0.16, r: 47.6, estimated: false }  # 추론
  coding: { s: 51.2, z: 0.1, r: 51.5, estimated: false }  # 코딩
  agentic: { s: 31.8, z: -0.21, r: 46.9, estimated: false }  # 에이전트
  trust: { s: 11.6, z: -0.72, r: 39.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 50.6, z: -0.01, r: 49.9, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.15, r: 47.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Qwen3 Max (Preview)

Alibaba · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.2 · 출력 $6.0 · 혼합 $1.68/1M · 59.0 t/s · TTFT 3.96s · 262k ctx` · 가성비 11.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.7 | +0.04 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 47.6 | -0.16 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 51.5 | +0.1 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 20.0%×0.5 |
| 에이전트 | 46.9 | -0.21 | 실측 | [[tau2-bench]] 33.0%×1.0, [[terminal-bench]] 20.0%×1.0 |
| 신뢰성 | 39.2 | -0.72 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.9 | -0.01 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 47.7 | -0.15 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
