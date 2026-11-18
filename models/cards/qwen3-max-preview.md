---
type: Model
title: Qwen3 Max (Preview)
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 49.3, z: 0.1, r: 51.4, estimated: false }  # 전문 지식
  reasoning: { s: 30.6, z: -0.25, r: 46.3, estimated: false }  # 추론
  coding: { s: 29.9, z: -0.34, r: 44.8, estimated: false }  # 코딩
  agentic: { s: 31.5, z: -0.46, r: 43.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 48.5, z: -0.15, r: 47.7, estimated: false }  # 긴문맥
  instruction: { s: 50.4, z: -0.14, r: 47.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Qwen3 Max (Preview)

Alibaba · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.4 | +0.1 | 실측 | [[gpqa-diamond]] 76.3636363636364%×0.4, [[humanitys-last-exam]] 10.1482854494903%×0.3 |
| 추론 | 46.3 | -0.25 | 실측 | [[critpt]] 0.857142857142857%×1.0, [[gpqa-diamond]] 76.3636363636364%×1.0, [[humanitys-last-exam]] 10.1482854494903%×1.0 |
| 코딩 | 44.8 | -0.34 | 실측 | [[terminal-bench]] 19.6969696969697%×0.5 |
| 에이전트 | 43.0 | -0.46 | 실측 | [[tau2-bench]] 32.7485380116959%×1.0, [[terminal-bench]] 19.6969696969697%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.7 | -0.15 | 실측 | [[aa-lcr]] 43.0%×1.0 |
| 지시 따르기 | 47.8 | -0.14 | 실측 | [[ifbench]] 48.0272108843537%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
