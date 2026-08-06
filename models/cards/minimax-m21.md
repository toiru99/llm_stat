---
type: Model
title: MiniMax-M2.1
creator: MiniMax
license: Open
intelligence_index: 31.0
price_blended_usd_1m: 0.39
output_speed_tps: 94.0
context_window: 205000
status: past
size_class: Large
params_b: 230
is_reasoning: true
radar:
  knowledge: { s: 46.2, z: 0.23, r: 53.4, estimated: false }  # 전문 지식
  reasoning: { s: 42.4, z: 0.38, r: 55.8, estimated: false }  # 추론
  coding: { s: 60.2, z: 0.53, r: 58.0, estimated: false }  # 코딩
  agentic: { s: 64.9, z: 1.16, r: 67.5, estimated: false }  # 에이전트
  trust: { s: 36.8, z: 0.37, r: 55.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.82, r: 62.4, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.17, r: 67.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# MiniMax-M2.1

MiniMax · Open · Large(230B) · 컨텍스트 205k · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 신뢰성, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.39/1M · 94.0 t/s · TTFT 1.61s · 205k ctx` · 가성비 79.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.4 | +0.23 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 55.8 | +0.38 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 58.0 | +0.53 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 67.5 | +1.16 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 55.5 | +0.37 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.4 | +0.82 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 67.6 | +1.17 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
