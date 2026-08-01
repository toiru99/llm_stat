---
type: Model
title: Qwen3 Max (Preview)
creator: Alibaba
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: None
output_speed_tps: 59.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.8, z: 0.12, r: 51.7, estimated: false }  # 전문 지식
  reasoning: { s: 32.4, z: -0.11, r: 48.4, estimated: false }  # 추론
  coding: { s: 51.2, z: 0.17, r: 52.6, estimated: false }  # 코딩
  agentic: { s: 31.8, z: -0.18, r: 47.3, estimated: false }  # 에이전트
  trust: { s: 14.9, z: -0.62, r: 40.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 52.6, z: 0.09, r: 51.4, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.1, r: 48.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-01
timestamp: 2026-08-01T00:00:00Z
---

# Qwen3 Max (Preview)

Alibaba · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.2 · 출력 $6.0 · 혼합 $None/1M · 59.0 t/s · TTFT 4.14s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.7 | +0.12 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 48.4 | -0.11 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 52.6 | +0.17 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 20.0%×0.5 |
| 에이전트 | 47.3 | -0.18 | 실측 | [[tau2-bench]] 33.0%×1.0, [[terminal-bench]] 20.0%×1.0 |
| 신뢰성 | 40.7 | -0.62 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.4 | +0.09 | 실측 | [[aa-lcr]] 40.0%×1.0 |
| 지시 따르기 | 48.5 | -0.1 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
