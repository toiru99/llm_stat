---
type: Model
title: Mistral 7B
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.155
output_speed_tps: 100.234117190296
context_window: 8192
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 7.2, z: -1.93, r: 21.0, estimated: false }  # 전문 지식
  reasoning: { s: 4.6, z: -1.53, r: 27.1, estimated: false }  # 추론
  coding: { s: 0.2, z: -1.35, r: 29.7, estimated: true }  # 코딩
  agentic: { s: 0.0, z: -1.55, r: 26.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 11.0, z: -1.79, r: 23.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Mistral 7B

Mistral · Open · Small · 컨텍스트 8k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.15 · 출력 $0.2 · 혼합 $0.155/1M · 100.234117190296 t/s · TTFT 0.4745332029169s · 8k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 21.0 | -1.93 | 실측 | [[gpqa-diamond]] 17.6767676767677%×0.4, [[humanitys-last-exam]] 4.55%×0.3 |
| 추론 | 27.1 | -1.53 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 17.6767676767677%×1.0, [[humanitys-last-exam]] 4.55%×1.0 |
| 코딩 | 29.7 | -1.35 | 추정 | (추정) |
| 에이전트 | 26.7 | -1.55 | 실측 | [[tau2-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 23.1 | -1.79 | 실측 | [[ifbench]] 19.9319727891156%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
