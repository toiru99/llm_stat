---
type: Model
title: GPT-5.4 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.175
output_speed_tps: 77.6435686659866
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.3, z: 1.58, r: 73.7, estimated: false }  # 전문 지식
  reasoning: { s: 73.0, z: 1.88, r: 78.2, estimated: false }  # 추론
  coding: { s: 87.4, z: 1.56, r: 73.4, estimated: false }  # 코딩
  agentic: { s: 81.3, z: 1.21, r: 68.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.3, z: 0.71, r: 60.6, estimated: false }  # 멀티모달
  long_context: { s: 92.5, z: 1.06, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 86.8, z: 1.51, r: 72.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.4 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 77.6435686659866 t/s · TTFT 86.3858760802306s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.7 | +1.58 | 실측 | [[gpqa-diamond]] 92.0202%×0.4, [[humanitys-last-exam]] 43.7442%×0.3 |
| 추론 | 78.2 | +1.88 | 실측 | [[critpt]] 23.4286%×1.0, [[gpqa-diamond]] 92.0202%×1.0, [[humanitys-last-exam]] 43.7442%×1.0 |
| 코딩 | 73.4 | +1.56 | 실측 | [[terminal-bench]] 57.5758%×0.5 |
| 에이전트 | 68.1 | +1.21 | 실측 | [[gdpval]] 1255.26 Elo×1.0, [[tau2-bench]] 87.1345%×1.0, [[tau3-banking]] 39.5876%×1.0, [[terminal-bench]] 57.5758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.6 | +0.71 | 실측 | [[mmmu-pro]] 78.4393%×1.0 |
| 긴문맥 | 66.0 | +1.06 | 실측 | [[aa-lcr]] 82%×1.0 |
| 지시 따르기 | 72.7 | +1.51 | 실측 | [[ifbench]] 73.9456%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
