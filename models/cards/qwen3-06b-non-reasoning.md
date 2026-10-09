---
type: Model
title: Qwen3 0.6B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 9.1, z: -1.55, r: 26.7, estimated: false }  # 전문 지식
  reasoning: { s: 7.3, z: -1.34, r: 30.0, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.26, r: 31.1, estimated: false }  # 코딩
  agentic: { s: 7.6, z: -1.2, r: 31.9, estimated: false }  # 에이전트
  trust: { s: 4.1, z: -1.05, r: 34.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.57, r: 26.4, estimated: false }  # 긴문맥
  instruction: { s: 14.1, z: -1.68, r: 24.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 0.6B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Qwen3 0.6B (non-reasoning)

Alibaba · Open · Tiny · 컨텍스트 32k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.7 | -1.55 | 실측 | [[aa-omniscience]] 5.0%×1.0, [[gpqa-diamond]] 23.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 30.0 | -1.34 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 23.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.1 | -1.26 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 31.9 | -1.2 | 실측 | [[tau2-bench]] 15.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 34.3 | -1.05 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.4 | -1.57 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 24.7 | -1.68 | 실측 | [[ifbench]] 22.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
