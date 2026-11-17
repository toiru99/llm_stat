---
type: Model
title: Qwen3 Coder 30B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2475
output_speed_tps: 153.55627177733624
context_window: 262144
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.3, z: -0.86, r: 37.0, estimated: false }  # 전문 지식
  reasoning: { s: 17.4, z: -0.89, r: 36.7, estimated: false }  # 추론
  coding: { s: 23.0, z: -0.57, r: 41.5, estimated: false }  # 코딩
  agentic: { s: 28.9, z: -0.54, r: 41.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.8, z: -0.49, r: 42.7, estimated: false }  # 긴문맥
  instruction: { s: 28.8, z: -1.04, r: 34.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3 Coder 30B A3B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.19 · 출력 $0.765 · 혼합 $0.2475/1M · 153.55627177733624 t/s · TTFT 1.3800761843069524s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.0 | -0.86 | 실측 | [[gpqa-diamond]] 51.616161616161605%×0.4, [[humanitys-last-exam]] 3.84615384615385%×0.3 |
| 추론 | 36.7 | -0.89 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 51.616161616161605%×1.0, [[humanitys-last-exam]] 3.84615384615385%×1.0 |
| 코딩 | 41.5 | -0.57 | 실측 | [[terminal-bench]] 15.151515151515198%×0.5 |
| 에이전트 | 41.8 | -0.54 | 실측 | [[tau2-bench]] 34.5029239766082%×1.0, [[terminal-bench]] 15.151515151515198%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.7 | -0.49 | 실측 | [[aa-lcr]] 32.6666666666667%×1.0 |
| 지시 따르기 | 34.4 | -1.04 | 실측 | [[ifbench]] 32.6530612244898%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
