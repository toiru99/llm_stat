---
type: Model
title: GPT-5.4 nano
creator: OpenAI
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 0.179
output_speed_tps: 154.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.7, z: 0.09, r: 51.4, estimated: false }  # 전문 지식
  reasoning: { s: 40.7, z: 0.29, r: 54.3, estimated: false }  # 추론
  coding: { s: 58.9, z: 0.48, r: 57.2, estimated: false }  # 코딩
  agentic: { s: 51.8, z: 0.64, r: 59.6, estimated: false }  # 에이전트
  trust: { s: 54.7, z: 1.3, r: 69.5, estimated: false }  # 신뢰성
  multimodal: { s: 64.3, z: -0.36, r: 44.6, estimated: false }  # 멀티모달
  long_context: { s: 78.3, z: 0.88, r: 63.2, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.81, r: 62.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# GPT-5.4 nano

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $0.179/1M · 154.0 t/s · TTFT 5.86s · 400k ctx` · 가성비 173.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.4 | +0.09 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 54.3 | +0.29 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 57.2 | +0.48 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 59.6 | +0.64 | 실측 | [[tau2-bench]] 53.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 69.5 | +1.3 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 44.6 | -0.36 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 63.2 | +0.88 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 62.1 | +0.81 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
