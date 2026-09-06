---
type: Model
title: Qwen3 Max Thinking (Preview)
creator: Alibaba
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: 1.68
output_speed_tps: 60.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.0, z: 0.24, r: 53.6, estimated: false }  # 전문 지식
  reasoning: { s: 33.3, z: -0.09, r: 48.7, estimated: false }  # 추론
  coding: { s: 25.8, z: -0.22, r: 46.6, estimated: false }  # 코딩
  agentic: { s: 55.3, z: 0.68, r: 60.2, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.82, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.7, z: 0.63, r: 59.5, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.27, r: 54.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max Thinking (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3 Max Thinking (Preview)

Alibaba · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $1.2 · 출력 $6.0 · 혼합 $1.68/1M · 60.0 t/s · TTFT 4.0s · 262k ctx` · 가성비 11.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.6 | +0.24 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 48.7 | -0.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 46.6 | -0.22 | 실측 | [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 60.2 | +0.68 | 실측 | [[tau2-bench]] 84.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 37.8 | -0.82 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.5 | +0.63 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 54.0 | +0.27 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
