---
type: Model
title: Grok 4.3 (low)
creator: SpaceXAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 0.64
output_speed_tps: 101.0
context_window: 1000000
radar:
  knowledge: { s: 50.6, z: -0.25, r: 46.3, estimated: false }  # 전문 지식
  reasoning: { s: 40.6, z: -0.37, r: 44.4, estimated: false }  # 추론
  coding: { s: 60.3, z: -0.17, r: 47.5, estimated: false }  # 코딩
  agentic: { s: 65.4, z: 0.44, r: 56.6, estimated: false }  # 에이전트
  trust: { s: 100.0, z: 2.39, r: 85.9, estimated: false }  # 신뢰성
  multimodal: { s: 81.0, z: 0.11, r: 51.7, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 0.46, r: 57.0, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.26, r: 68.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Grok 4.3 (low)

SpaceXAI · Proprietary · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 101.0 t/s · TTFT 7.07s · 1M ctx` · 가성비 54.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.3 | -0.25 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 44.4 | -0.37 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 47.5 | -0.17 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 56.6 | +0.44 | 실측 | [[tau2-bench]] 89.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 85.9 | +2.39 | 실측 | [[aa-omniscience]] 84.0%×1.0 |
| 멀티모달 | 51.7 | +0.11 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 57.0 | +0.46 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 68.9 | +1.26 | 실측 | [[ifbench]] 81.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
