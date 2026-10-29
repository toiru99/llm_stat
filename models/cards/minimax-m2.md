---
type: Model
title: MiniMax-M2
creator: MiniMax
license: Open
intelligence_index: None
price_blended_usd_1m: 0.39
output_speed_tps: 125.0
context_window: 205000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.5, z: 0.22, r: 53.3, estimated: false }  # 전문 지식
  reasoning: { s: 50.4, z: 0.21, r: 53.1, estimated: false }  # 추론
  coding: { s: 39.4, z: 0.07, r: 51.1, estimated: false }  # 코딩
  agentic: { s: 39.4, z: 0.18, r: 52.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.59, r: 58.8, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.33, r: 70.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# MiniMax-M2

MiniMax · Open · Large · 컨텍스트 205k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.39/1M · 125.0 t/s · TTFT 1.4s · 205k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.3 | +0.22 | 실측 | [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 53.1 | +0.21 | 실측 | [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 51.1 | +0.07 | 실측 | [[terminal-bench]] 26.0%×0.5 |
| 에이전트 | 52.7 | +0.18 | 실측 | [[terminal-bench]] 26.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.8 | +0.59 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 70.0 | +1.33 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
