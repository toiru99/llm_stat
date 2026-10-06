---
type: Model
title: MiniMax-M2.5
creator: MiniMax
license: Open
intelligence_index: 23.0
price_blended_usd_1m: 0.201
output_speed_tps: 106.0
context_window: 205000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.2, z: 0.31, r: 54.6, estimated: false }  # 전문 지식
  reasoning: { s: 41.2, z: 0.21, r: 53.2, estimated: false }  # 추론
  coding: { s: 53.0, z: 0.57, r: 58.5, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 1.36, r: 70.4, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.75, r: 38.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.92, r: 63.8, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.25, r: 68.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# MiniMax-M2.5

MiniMax · Open · Large · 컨텍스트 205k · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.201/1M · 106.0 t/s · TTFT 1.33s · 205k ctx` · 가성비 114.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.6 | +0.31 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 53.2 | +0.21 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 58.5 | +0.57 | 실측 | [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 70.4 | +1.36 | 실측 | [[tau2-bench]] 95.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 38.7 | -0.75 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.8 | +0.92 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 68.8 | +1.25 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
