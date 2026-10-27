---
type: Model
title: Nova Pro
creator: Amazon
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: 0.62
output_speed_tps: 126.0
context_window: 300000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.5, z: -0.77, r: 38.4, estimated: false }  # 전문 지식
  reasoning: { s: 16.6, z: -0.93, r: 36.0, estimated: false }  # 추론
  coding: { s: 9.1, z: -0.98, r: 35.4, estimated: false }  # 코딩
  agentic: { s: 9.1, z: -0.89, r: 36.7, estimated: false }  # 에이전트
  trust: { s: 20.6, z: -0.3, r: 45.5, estimated: false }  # 신뢰성
  multimodal: { s: 39.7, z: -1.62, r: 25.7, estimated: false }  # 멀티모달
  long_context: { s: 23.6, z: -0.88, r: 36.8, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.76, r: 38.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Nova Pro

Amazon · Proprietary · Unknown · 컨텍스트 300k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.8 · 출력 $3.2 · 혼합 $0.62/1M · 126.0 t/s · TTFT 1.04s · 300k ctx` · 가성비 11.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.4 | -0.77 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 50.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 36.0 | -0.93 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 50.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 35.4 | -0.98 | 실측 | [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 36.7 | -0.89 | 실측 | [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 45.5 | -0.3 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | 25.7 | -1.62 | 실측 | [[mmmu-pro]] 44.0%×1.0 |
| 긴문맥 | 36.8 | -0.88 | 실측 | [[aa-lcr]] 21.0%×1.0 |
| 지시 따르기 | 38.5 | -0.76 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
