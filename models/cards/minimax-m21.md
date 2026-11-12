---
type: Model
title: MiniMax-M2.1
creator: MiniMax
license: Open
intelligence_index: None
price_blended_usd_1m: 0.201
output_speed_tps: None
context_window: 205000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.3, z: 0.69, r: 60.4, estimated: false }  # 전문 지식
  reasoning: { s: 57.4, z: 0.7, r: 60.5, estimated: false }  # 추론
  coding: { s: 43.7, z: 0.2, r: 53.0, estimated: false }  # 코딩
  agentic: { s: 43.7, z: 0.3, r: 54.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 76.3, z: 0.7, r: 60.5, estimated: false }  # 긴문맥
  instruction: { s: 81.2, z: 1.22, r: 68.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# MiniMax-M2.1

MiniMax · Open · Large · 컨텍스트 205k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.201/1M · None t/s · TTFT Nones · 205k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.4 | +0.69 | 실측 | [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 23.2%×0.3 |
| 추론 | 60.5 | +0.7 | 실측 | [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 23.2%×1.0 |
| 코딩 | 53.0 | +0.2 | 실측 | [[terminal-bench]] 28.8%×0.5 |
| 에이전트 | 54.5 | +0.3 | 실측 | [[terminal-bench]] 28.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.5 | +0.7 | 실측 | [[aa-lcr]] 67.7%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 실측 | [[ifbench]] 69.9%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
