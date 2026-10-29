---
type: Model
title: MiniMax-M2.5
creator: MiniMax
license: Open
intelligence_index: None
price_blended_usd_1m: 0.201
output_speed_tps: 35.0
context_window: 205000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.1, z: 0.64, r: 59.7, estimated: false }  # 전문 지식
  reasoning: { s: 60.3, z: 0.65, r: 59.8, estimated: false }  # 추론
  coding: { s: 53.0, z: 0.53, r: 58.0, estimated: false }  # 코딩
  agentic: { s: 53.0, z: 0.65, r: 59.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.33, r: 70.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# MiniMax-M2.5

MiniMax · Open · Large · 컨텍스트 205k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.201/1M · 35.0 t/s · TTFT 1.68s · 205k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.7 | +0.64 | 실측 | [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 59.8 | +0.65 | 실측 | [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 58.0 | +0.53 | 실측 | [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 59.7 | +0.65 | 실측 | [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 70.0 | +1.33 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
