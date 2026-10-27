---
type: Model
title: Qwen3 1.7B (non-reasoning)
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
  knowledge: { s: 12.2, z: -1.43, r: 28.6, estimated: false }  # 전문 지식
  reasoning: { s: 9.2, z: -1.27, r: 31.0, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.28, r: 30.8, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.2, r: 32.0, estimated: false }  # 에이전트
  trust: { s: 0.0, z: -1.24, r: 31.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 12.7, z: -1.79, r: 23.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 1.7B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Qwen3 1.7B (non-reasoning)

Alibaba · Open · Tiny · 컨텍스트 32k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.6 | -1.43 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 28.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 31.0 | -1.27 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 28.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 30.8 | -1.28 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.0 | -1.2 | 실측 | [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 31.5 | -1.24 | 실측 | [[aa-omniscience]] 2.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 23.2 | -1.79 | 실측 | [[ifbench]] 21.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
