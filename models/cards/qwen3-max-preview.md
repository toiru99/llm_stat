---
type: Model
title: Qwen3 Max (Preview)
creator: Alibaba
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: 1.008
output_speed_tps: 56.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.8, z: -0.03, r: 49.6, estimated: false }  # 전문 지식
  reasoning: { s: 31.6, z: -0.21, r: 46.8, estimated: false }  # 추론
  coding: { s: 30.3, z: -0.19, r: 47.1, estimated: false }  # 코딩
  agentic: { s: 31.8, z: -0.25, r: 46.2, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.74, r: 38.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 48.3, z: -0.09, r: 48.6, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.13, r: 48.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Qwen3 Max (Preview)

Alibaba · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.2 · 출력 $6.0 · 혼합 $1.008/1M · 56.0 t/s · TTFT 4.07s · 262k ctx` · 가성비 12.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.6 | -0.03 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 46.8 | -0.21 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 47.1 | -0.19 | 실측 | [[terminal-bench]] 20.0%×0.5 |
| 에이전트 | 46.2 | -0.25 | 실측 | [[tau2-bench]] 33.0%×1.0, [[terminal-bench]] 20.0%×1.0 |
| 신뢰성 | 38.8 | -0.74 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.6 | -0.09 | 실측 | [[aa-lcr]] 43.0%×1.0 |
| 지시 따르기 | 48.0 | -0.13 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
