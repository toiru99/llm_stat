---
type: Model
title: o4-mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 0.8525
output_speed_tps: 136.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.7, z: 0.3, r: 54.5, estimated: false }  # 전문 지식
  reasoning: { s: 37.6, z: 0.16, r: 52.4, estimated: false }  # 추론
  coding: { s: 59.8, z: 0.51, r: 57.7, estimated: false }  # 코딩
  agentic: { s: 39.6, z: 0.11, r: 51.7, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.26, r: 46.0, estimated: false }  # 신뢰성
  multimodal: { s: 77.1, z: 0.3, r: 54.5, estimated: false }  # 멀티모달
  long_context: { s: 72.3, z: 0.7, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.18, r: 67.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o4-mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# o4-mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $0.8525/1M · 136.0 t/s · TTFT 25.48s · 200k ctx` · 가성비 30.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.5 | +0.3 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 52.4 | +0.16 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 57.7 | +0.51 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 51.7 | +0.11 | 실측 | [[tau2-bench]] 56.0%×1.0, [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | 46.0 | -0.26 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 54.5 | +0.3 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 60.6 | +0.7 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
