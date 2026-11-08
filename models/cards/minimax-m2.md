---
type: Model
title: MiniMax-M2
creator: MiniMax
license: Open
intelligence_index: None
price_blended_usd_1m: 0.39
output_speed_tps: None
context_window: 205000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.8, z: 0.2, r: 53.0, estimated: false }  # 전문 지식
  reasoning: { s: 49.7, z: 0.19, r: 52.9, estimated: false }  # 추론
  coding: { s: 39.2, z: 0.06, r: 50.9, estimated: false }  # 코딩
  agentic: { s: 39.2, z: 0.17, r: 52.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 72.5, z: 0.59, r: 58.9, estimated: false }  # 긴문맥
  instruction: { s: 84.6, z: 1.34, r: 70.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# MiniMax-M2

MiniMax · Open · Large · 컨텍스트 205k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.39/1M · None t/s · TTFT Nones · 205k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.0 | +0.2 | 실측 | [[gpqa-diamond]] 77.7%×0.4, [[humanitys-last-exam]] 13.7%×0.3 |
| 추론 | 52.9 | +0.19 | 실측 | [[gpqa-diamond]] 77.7%×1.0, [[humanitys-last-exam]] 13.7%×1.0 |
| 코딩 | 50.9 | +0.06 | 실측 | [[terminal-bench]] 25.8%×0.5 |
| 에이전트 | 52.5 | +0.17 | 실측 | [[terminal-bench]] 25.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.9 | +0.59 | 실측 | [[aa-lcr]] 64.3%×1.0 |
| 지시 따르기 | 70.1 | +1.34 | 실측 | [[ifbench]] 72.3%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
