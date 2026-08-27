---
type: Model
title: MiniMax-M2.1
creator: MiniMax
license: Open
intelligence_index: 32.0
price_blended_usd_1m: 0.39
output_speed_tps: 93.0
context_window: 205000
status: past
size_class: Large
params_b: 230
is_reasoning: true
radar:
  knowledge: { s: 45.8, z: 0.21, r: 53.1, estimated: false }  # 전문 지식
  reasoning: { s: 42.2, z: 0.31, r: 54.6, estimated: false }  # 추론
  coding: { s: 60.2, z: 0.46, r: 57.0, estimated: false }  # 코딩
  agentic: { s: 64.9, z: 1.06, r: 65.8, estimated: false }  # 에이전트
  trust: { s: 33.7, z: 0.2, r: 53.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.5, z: 0.86, r: 62.8, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.11, r: 66.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# MiniMax-M2.1

MiniMax · Open · Large(230B) · 컨텍스트 205k · 종합지능 **32.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.39/1M · 93.0 t/s · TTFT 1.66s · 205k ctx` · 가성비 82.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.1 | +0.21 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 54.6 | +0.31 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 57.0 | +0.46 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 65.8 | +1.06 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 53.1 | +0.2 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.8 | +0.86 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 66.6 | +1.11 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
