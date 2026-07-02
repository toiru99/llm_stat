---
type: Model
title: GPT-5.3 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 1.87
output_speed_tps: 81.0
context_window: 400000
radar:
  knowledge: { s: 86.2, z: 1.57, r: 73.6, estimated: false }  # 전문 지식
  reasoning: { s: 75.8, z: 1.46, r: 71.9, estimated: false }  # 추론
  coding: { s: 86.9, z: 1.17, r: 67.5, estimated: false }  # 코딩
  agentic: { s: 85.5, z: 1.35, r: 70.3, estimated: false }  # 에이전트
  trust: { s: 11.2, z: -0.82, r: 37.7, estimated: false }  # 신뢰성
  multimodal: { s: 89.7, z: 0.71, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.04, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 0.86, r: 63.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.3 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# GPT-5.3 Codex (xhigh)

OpenAI · Proprietary · 컨텍스트 400k · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.87/1M · 81.0 t/s · TTFT 100.64s · 400k ctx` · 가성비 23.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.6 | +1.57 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 71.9 | +1.46 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 67.5 | +1.17 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 53.0%×0.5 |
| 에이전트 | 70.3 | +1.35 | 실측 | [[tau2-bench]] 86.0%×1.0, [[terminal-bench]] 53.0%×1.0 |
| 신뢰성 | 37.7 | -0.82 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 60.7 | +0.71 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 65.7 | +1.04 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 63.0 | +0.86 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
